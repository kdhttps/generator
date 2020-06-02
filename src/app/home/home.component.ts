import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  experience = [{
    title: 'Software Engineer',
    employmentType: 'Full-time',
    company: '',
    location: '',
    startDate: 'July 2019',
    endDate: 'Continue',
    descTitle: 'Currently I am working on product maintenance, adding new features and customer support. Below is my contribution:',
    descs: [
      'Working on a new project - MEAN stack',
      'Project management and maintenance',
      'Made a documentation for project',
      'Project testing and task management',
      'Customer support, calls, chat and demo',
      'Product digital marketing with the Adobe tools, Adobe target',
      'CI with Github and CI/CD with heroku',
      'Software deployment with Digital Ocean and AWS servers',
      'Code maintenance and support for NodeJS, Angular, React and Vue libs',
    ],
  }, {
    title: 'Software Engineer',
    employmentType: 'Full-time',
    company: '',
    location: '',
    startDate: 'July 2018',
    endDate: 'June 2019',
    descTitle: 'After one year of experience, I got a very good experience. During this period, I was working in IAM(Identity Access Management) system with Lua and NodeJS language. Below is my contribution from July 2018',
    descs: [
      'Learned Lua language, Kong Proxy and more about OpenID Connect',
      'Made a Lua Kong proxy custom plugins using OpenID Connect concepts',
      'Made a JWT Authentication and scope authorization Lua custom plugins',
      'Made a UI for plugin configuration in NodeJS, ExpressJS, Postgres SQL and Angular',
      'Made a setup script in python for Software installation, testing and deployment',
      'CI/CD using Jenkins and Shell programming',
      'Dockerized Angular/Node application and Lua test suite',
    ],
  }, {
    title: 'Junior Software Developer',
    employmentType: 'Full-time',
    company: '',
    location: '',
    startDate: 'July 2017',
    endDate: 'June 2018',
    descTitle: 'Started my employment and worked as a junior MEAN Stack developer. My contribution during this time is as below',
    descs: [
      'Communication with Client and getting the requirement.',
      'Worked on Management System, Made a system in NodeJS With very complex MongoDB database structure.',
      'Worked in IAM(Identity Access Management) field, Made a User identity System in NodeJS, ExpressJS, and MongoDB, dealing with OpenID Connect - OAuth 2.0',
      'Made a NodeJS client library for the OpenID Connect Client',
      'Made a node.js libs and published on npm',
    ]
  }, {
    title: 'Internship and live Work',
    employmentType: 'Full-time',
    company: '',
    location: '',
    startDate: 'March 2017',
    endDate: 'June 2017',
    descTitle: 'Worked on live project--Online Maid Service, My contribution to this is:',
    descs: [
      'Made a REST Full API in NodeJS',
      'Registration API for Maid and Customer',
      'Verify address using third party API',
      'Send an android-ios mobile notification',
      'Place orders',
      'Stripe payments',
      'Custom and Maid Rating',
    ]
  }, {
    title: 'Internship',
    employmentType: 'Full-time',
    company: '',
    location: '',
    startDate: 'December 2016',
    endDate: 'February 2017',
    descTitle: 'I got a Training as a MEAN Stack JavaScript Software developer. I learned several things and also worked on live projects.',
    descs: [
      'learned about MongoDB database design, Querying, handle performance and import-export data.',
      'learned and Made a REST Full API using NodeJS and Express framework, Added Custom libraries, Middleware, JWT API authentication, parameter validation, MongoDB module design, MongoDB Connection and CRUD Operation with MongoDB.',
      'learned and Made a Single Page Application(SPA) Shopping Site in Angular JS.',
    ]
  }];
  
  constructor() { }

  ngOnInit(): void {
  }

}
