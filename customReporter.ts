import {
    FullConfig,
    FullResult,
    Reporter,
    Suite,
    TestCase,
    TestError,
    TestResult,
    TestStep,
} from '@playwright/test/reporter';

class CustomReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite): void {
        console.log('Test suite started: ' + suite.title);
    }

    onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
        console.log('Test started: ${test.title}');
    }
    onStdOut(
        chunk: string | Buffer,
        test: void | TestCase,
        result: void | TestResult
    ): void {
        console.log(`StdOut: ${chunk.toString()}`);
    }
    onStdErr(
        chunk: string | Buffer,
        test: void | TestCase,
        result: void | TestResult
    ): void {
        console.error(`StdErr: ${chunk.toString()}`);
    }
    onTestEnd(test: TestCase, result: TestResult): void {
        console.log(`Test ended: ${test.title}`);
        console.log(`Status: ${result.status}`);
        if (result.error) {
            console.log(`Error: ${result.error.message}`);
        }
    }
    onTestBegin(test: TestCase, result: TestResult): void {}
    onStepEnd(test: TestCase, result: TestResult, step: TestStep): void {}
    onError(error: TestError): void {
        console.error(`Error: ${error.message}`);
    }
    onEnd(
        result: FullResult
    ): Promise<{ status: FullResult['status'] } | undefined | void> | void {
        console.log(`Test suite ended`);
    }
}

export default CustomReporter;
