import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 60000, // 1 minute timeout for each test
    use: {
        headless: process.env.HEADLESS == 'false', // Use environment variable to control headless mode
        viewport: { width: 1280, height: 720 }, // Set viewport size
        ignoreHTTPSErrors: true, // Ignore HTTPS errors
        video: 'on-first-retry', // Record video on first retry
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }, // Use Desktop Chrome device profile
        },
    ],
    // reporter: './customReporter.ts',
    reporter: [
        //     ['list'], // Prints test results to the terminal
        //     ['json', { outputFile: 'test-results.json' }],
        ['html', { outputFolder: 'test-results', open: 'never' }], // Generates an HTML report
    ], // Use multiple reporters
};

export default config;
