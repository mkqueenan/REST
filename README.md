# REST
Creating a RESTful API with Node.js, Express, and MongoDB

Technologies used: Node.js, Express, MongoDB, and a little help from mongoose and MongoDB Cloud

This README contains thoughts and ideas pertaining to the REST architecture style...

Within REST, there are 6 architectural constraints defined by Fielding: https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

They are:

1. Client-Server
2. Stateless
3. Cache
4. Uniform Interface
5. Layered System
6. Code-On-Demand

A key challenge with creating RESTful APIs is introducing tight coupling amongst a mobile or web application and the REST API service that they consume. Often, the back-end API is developed for a specific application. Each application then requires another bespoke, special-purpose REST API. The trend is easy to observe--the application and the service become very tightly coupled. Further, developing a new RESTful API for every project causes the back-end architecture to grow in complexity. The infrastructure will, inevitably, be difficult to scale, reuse, etc. Thus, a better approach would be to create a general purpose RESTful API platform that can be consumed in a flexible manner. The back-end should be architected for general-use rather than specific.

