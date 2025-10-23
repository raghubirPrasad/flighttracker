import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check environment variables
    const envVars = {
      hasCredentialsJson: !!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON,
      hasCredentialsFile: !!process.env.GOOGLE_APPLICATION_CREDENTIALS,
      hasProjectId: !!process.env.DIALOGFLOW_CX_PROJECT_ID,
      hasLocation: !!process.env.DIALOGFLOW_CX_LOCATION,
      hasAgentId: !!process.env.DIALOGFLOW_CX_AGENT_ID,
      hasLanguageCode: !!process.env.DIALOGFLOW_LANGUAGE_CODE,
      nodeEnv: process.env.NODE_ENV,
      // Don't expose actual values for security
      projectIdLength: process.env.DIALOGFLOW_CX_PROJECT_ID?.length || 0,
      locationValue: process.env.DIALOGFLOW_CX_LOCATION || 'Not set',
      languageCodeValue: process.env.DIALOGFLOW_LANGUAGE_CODE || 'Not set',
      credentialsJsonLength: process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON?.length || 0,
    };

    return NextResponse.json({
      success: true,
      environment: envVars,
      message: 'Debug information retrieved'
    });

  } catch (error) {
    console.error('Debug error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve debug information'
    }, { status: 500 });
  }
}
