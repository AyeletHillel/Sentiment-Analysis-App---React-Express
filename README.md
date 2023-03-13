# NLP Lab
## Topic Modeling App

### Overview
NLP Lab makes state-of-the-art topic modeling methods accessible to non-technical people. This full CRUD app allows users to upload a text document and receive a topic analysis report generated with the help of BERTopic.
BERTopic is a topic modeling technique that leverages BERT embeddings and c-TF-IDF to create dense clusters allowing for easily interpretable topics whilst keeping important words in the topic descriptions. A user can create a new report, update a report by adjusting the input or re-running the model, and delete a report. 

### Tech Stack

| Component  | Tech Used |
|------------|-----------|
| Backend    | Django    |
| Frontend   | React     |
| Database   | MongoDB   |
| NLP        | [BERTopic](https://maartengr.github.io/BERTopic/api/bertopic.html)  |
| Deployment | Render    |
| Styling    | Tailwind  |

### Data Model

| Property  | Type |
|------------|-----------|
| title    | String    |
| input   | String     |
| result   | Array   |

### Backend Route Table

| Route Name | URL |	HTTP Verb | Description	
| --- | --- | --- | --- | 
| Index | /reports | GET | Loads a list of all reports 
| Show | /report/:id | GET | Loads one report 
| Create | /report | POST | Creates one report 
| Update| /report/:id | PUT | Updates one report
| Delete| /report/:id | DELETE | Deletes one report


### Frontend Route Table

| Route	| Element |	Loader | Action	| Summary
| --- | --- | --- | --- | --- |
| / | Index | indexLoader |  | Loads a list of all reports
| /report/:id | Show | showLoader |  | Loads one report
| /create | Create | | createAction | Create one report
| /update/:id | Update | | updateAction | Updates one report
| /delete/:id | Delete | | deleteeAction | Deletes one report

### Wireframe

<img width="529" alt="Screen Shot 2023-03-04 at 5 47 39 PM" src="https://user-images.githubusercontent.com/91492759/222932083-2450a083-26b7-42cc-bf51-3d5ba38ec0a7.png">

