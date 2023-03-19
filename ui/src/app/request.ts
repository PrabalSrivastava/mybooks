export class Request {
    id: Number;
    requestId: String;
    createdBy: String;
    createdOn: Date;
    assignedTo: String;
    currentTaskId: String;
    updatedOn: Date;
    updatedBy: String;

    constructor(id: Number, requestId: String, createdBy: String, 
        createdOn: Date, assignedTo: String, currentTaskId: String, 
        updatedOn: Date, updatedBy: String) {
      this.id = id;
      this.requestId = requestId;
      this.createdBy = createdBy;
      this.createdOn = createdOn;
      this.assignedTo = assignedTo;
      this.currentTaskId = currentTaskId;
      this.updatedOn = updatedOn;
      this.updatedBy = updatedBy;
      
    }

    
}