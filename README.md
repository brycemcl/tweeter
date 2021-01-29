# Tweeter Project

[Live demo](https://tweeter.brycemclachlan.me/)

This is a student project to learn html, css, and jquery. Tweeter is a simple, single-page Twitter clone.

!["Desktop"](/screenshots/1.jpeg)
!["Tablet"](/screenshots/2.jpeg)
!["Phone(before the fold)"](/screenshots/3.jpeg)
!["Phone(after the fold)"](/screenshots/4.jpeg)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

### Containerised

- Run the server using the `docker-compose up` command.

### Kubernetes

In the "kubernetes manifests" folder you will find manifests. You will need to modify `tinyapp-ingress.yaml` to suit your environment.


## Dependencies

- Node
- fortawesome icons
- body-parser
- chance
- express
- md5
- date-fns
- jquery
- Docker (optional)
- Docker-compose (optional)
