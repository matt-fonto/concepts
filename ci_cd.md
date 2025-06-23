# CI/CD

## 1. Continuous Integration

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

## 2. Continuous Deployment

- Once the code passes the CI workflow, if it's alright, then build it

  - After successful tests:
    - Build Docker image
    - Push to Docker Registry (new artifact created)
    - Connect to server/cluster (dev environment)
    - Run Docker container

- Where we deploy validated artifcates to staging or prod environments
- Besides deploying it to DEV, we can:
  - Run E2E tests
  - DAST Scans

### Dev E2E Tests

- Run extensive tests on the running system

1. Click UI
2. Call API
3. Update DB
4. Confirm on UI

## 3. CI/CD Pipeline

CI Pipeline

1. Build
2. Unit tests
3. Package
4. Integration tests

5. Artifact repo

Continuous delivery

6. Deploy to Dev
7. Integration + Security

Continuous deployment

8. Deploy to staging

- Performance test
- Compliance check
- Security test

- Beyond the automated points above, here, we can have a human in the loop (Project Manager) that tests the features. Shows it to business decision makers

9. Deploy to production

- Through automated pipeline, we get:
  - more focus on building, less on deploying
  - no code freezes
  - more reliable software
  - less errors

## 4. Deployment strategies

1. Canary deployment: Progressive deployment of an application

   - Deploying the software for 1%, 5% of users
   - If nothing went wrong, gradually roll out for more users
   - Load balancer
     - Most nodes (old version)
     - Canary node (releasing the new feature)
     - We progress until all nodes have the new content

2. Blue-green deployment: Two different servers, one with current, the other with new changes
   - We switch from one to the other
   - If something goes wrong, just roll back to previous version
