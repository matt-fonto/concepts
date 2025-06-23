# CI/CD

## Continuous Integration

Changes should be kept small and integrated regurlarly

1. Commit small.
2. Commit frequently.
3. Test fast.
4. Fix early.

| Before                     | After                       |
| -------------------------- | --------------------------- |
| Complex, entangled issues  | Issues caught early & often |
| Bugs found late by testers | Bugs are small and isolated |
| Delayed feedback           | Fixed immediately           |

- Practice of frequenlty merging invidual devs code changes into a shared mainline and automatically validating the integration via builds and tests

### Main goals

1. Detect problems early
2. Provide fast feedback
3. Maintain a usable codebase

### CI Workflow

1. Commit & push -> changes are pushed to a feature branch or PR is opened
2. Automated trigger -> CI server (GH actions, GitLab CI, Jenkins) detects the push/PR
3. Build and test -> Checks the code, installs deps, runs linters, compiles/bundles assets and executes unit/integration tests
4. Report & Enforece -> Results (pass/fail, coverage metrics, code-quality alerts) are posted back to the PR
   - Failing pipelines block merges until issues are solved
