import { NextRequest, NextResponse } from 'next/server';
import { SessionsClient } from '@google-cloud/dialogflow-cx';

// Initialize Dialogflow CX client
const dialogflowClient = new SessionsClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

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
    
    // Fallback response if Dialogflow fails
    return NextResponse.json({
      response: "I'm sorry, I'm having trouble connecting to my AI service right now. Please try again later.",
      intent: 'Error',
      confidence: 0,
    });
  }
}
