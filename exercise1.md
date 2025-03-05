For the language of the project I chose **Ruby**, since I have not been in touch with it previously and do not know anything about the CI/CD with it.

## CI setup:

- First we need to connect the repo to blog.ruby.ci and install blog.ruby.ci app and accept permissions to run tests on the project
- After setting this up, each push on GitHub, blog.ruby.ci will trigger new build and run the tests

- Linting:

  - For linting I found Rubocop from the documentation which is very popular for the language and I found it quite easy to setup

- Testing:

  - For testing I found RSpec and Minitest, which could both work but I chose Minitest which uses test-driven development to setup testing environment for the project.

- Building:
  - For building Ruby seems to be interpreted language so it does not need compiling

## Alternative options:

Some other alternatives for CI setup are:

- CircleCI: continuous integration and continuous delivery platform that can be used to implement DevOps practices.
- Atlassian Bamboo: continuous integration (CI) and continuous delivery (CD) server. Basic configuration options are already built-in.
- Gitlab CI: GitLab features a more modern, clean, and user-friendly interface than Jenkins.

## self hosted or cloud based?

Why to choose cloud-based?

- Full control over infrastructure and security
- Can be cost-effective for large-scale operations
- Ideal for compliance-heavy industries

Why to choose self-hosted?

- Scales automatically with demand
- No infrastructure maintanence required
- Faster setup and easier integration with cloud servers

Key aspects to check:

- Workload & scalability: How many builds/tests we need to run daily?
- Cost considerations: Pay-as-you-go cloud model or a fixed self-hosted cost will be more economical
- Maintanence & expertise: Does the team have the expertise to manage self-hosted infrastructure
- Integration: Do we rely on cloud services like AWS, Azure or Google Cloud
