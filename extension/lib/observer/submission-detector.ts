export class SubmissionDetector {
  private lastSubmissionId: string | null = null;
  private readonly CHECK_INTERVAL = 500;

  start(callback: (submissionId: number) => void) {
    console.log("👀 Waiting for submissions...");

    setInterval(() => {
      const match = window.location.pathname.match(
        /\/submissions\/(\d+)\/?$/
      );

      if (!match) return;

      const submissionId = match[1];

      if (submissionId === this.lastSubmissionId) {
        return;
      }

      this.lastSubmissionId = submissionId;

      console.log("✅ Submission detected:", submissionId);

      callback(Number(submissionId));
    }, this.CHECK_INTERVAL);
  }
}