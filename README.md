# NLP Lab
## Topic Modeling App

### Overview
NLP Lab makes state-of-the-art sentiment analysis methods accessible to non-technical people. This full CRUD app allows users to upload a text document and receive a topic analysis report generated with the help of Sentiment.
Sentiment is a Node.js module that uses the AFINN-165 wordlist and Emoji Sentiment Ranking to perform sentiment analysis on arbitrary blocks of input text. A user can create a new report, update a report by adjusting the input or re-running the model, and delete a report. 

### Tech Stack

| Component  | Tech Used |
|------------|-----------|
| Backend    | Express   |
| Frontend   | React     |
| Database   | MongoDB   |
| NLP        | [Sentiment](https://www.npmjs.com/package/sentiment)  |
| Deployment | Render    |
| Styling    | Tailwind  |

### Data Model

| Property  | Type |
|------------|-----------|
| input    | String    |
| score   | Number     |
| sentiment   | String   |

### Backend Route Table

| Route Name | URL |	HTTP Verb | Description	
| --- | --- | --- | --- | 
| Index | /results | GET | Loads a list of all reports 
| Show | /result/:id | GET | Loads one report 
| Create | /result | POST | Creates one report 
| Update| /result/:id | PUT | Updates one report
| Delete| /result/:id | DELETE | Deletes one report


### Frontend Route Table

| Route	| Element |	Loader | Action	| Summary
| --- | --- | --- | --- | --- |
| / | Index | indexLoader |  | Loads a list of all results
| /result/:id | Show | showLoader |  | Loads one result
| /create | Create | | createAction | Create one result
| /update/:id | Update | | updateAction | Updates one result
| /delete/:id | Delete | | deleteeAction | Deletes one result

### Wireframe

<img width="1155" alt="Screen Shot 2023-04-01 at 10 13 44 AM" src="https://user-images.githubusercontent.com/91492759/229294411-10698ca7-2fac-41db-94bf-e48276f1a068.png">

