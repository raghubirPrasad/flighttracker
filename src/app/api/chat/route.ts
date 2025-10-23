import { NextRequest, NextResponse } from 'next/server';
import { SessionsClient } from '@google-cloud/dialogflow-cx';

// Initialize Dialogflow CX client with environment variables
let dialogflowClient: SessionsClient;

try {
  // Try to create client with credentials from environment variables
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    // For Vercel deployment - credentials as JSON string
    const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    dialogflowClient = new SessionsClient({
      credentials: credentials,
    });
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    // For local development - credentials file path
    dialogflowClient = new SessionsClient({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });
  } else {
    // Fallback - will be handled in the API call
    dialogflowClient = new SessionsClient();
  }
} catch (error) {
  console.error('Error initializing Dialogflow client:', error);
  // Will be handled in the API call
}

const projectId = process.env.DIALOGFLOW_CX_PROJECT_ID || 'quiet-engine-474303-i5';
const location = process.env.DIALOGFLOW_CX_LOCATION || 'global';
const agentId = process.env.DIALOGFLOW_CX_AGENT_ID || 'dc40fde4-0fde-43fc-9a7f-eaa65c0ef6ea';
const languageCode = process.env.DIALOGFLOW_LANGUAGE_CODE || 'en-US';
const sessionId = 'flighttracker-session';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Check if required environment variables are set
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.error('Missing Dialogflow credentials');
      return NextResponse.json({
        response: "AI service is not configured. Please contact the administrator.",
        intent: 'Configuration Error',
        confidence: 0,
      });
    }

    // Create session path for Dialogflow CX
    const sessionPath = dialogflowClient.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId
    );

    // Prepare the request for Dialogflow CX
    const dialogflowRequest = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
        },
        languageCode: languageCode,
      },
    };

    // Send request to Dialogflow
    const [response] = await dialogflowClient.detectIntent(dialogflowRequest);

    // Extract the response - CORRECT Dialogflow CX format
    const result = response.queryResult;
    const intent = result.intent;
    
    // Log full response for debugging
    console.log('Full Dialogflow Response:', JSON.stringify(result, null, 2));
    
    // CORRECT way to extract text from Dialogflow CX responses:
    const messages = result.responseMessages || [];
    const textMessage = messages.find(msg => msg.text);
    const botReply = textMessage?.text?.text?.[0] || 'I apologize, I did not understand that.';

    // Return the response
    return NextResponse.json({
      response: botReply,
      intent: intent?.displayName || 'Default Welcome Intent',
      confidence: result.intentDetectionConfidence || 0,
    });

  } catch (error) {
    console.error('Dialogflow API Error:', error);
    
    // More specific error handling
    let errorMessage = "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again later.";
    
    if (error instanceof Error) {
      if (error.message.includes('credentials')) {
        errorMessage = "AI service credentials are not properly configured.";
      } else if (error.message.includes('permission')) {
        errorMessage = "AI service permission denied. Please contact support.";
      } else if (error.message.includes('network') || error.message.includes('timeout')) {
        errorMessage = "Network connection issue. Please check your internet connection and try again.";
      }
    }
    
    return NextResponse.json({
      response: errorMessage,
      intent: 'Error',
      confidence: 0,
    });
  }
}
