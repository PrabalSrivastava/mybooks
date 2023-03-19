export class User {
    id: Number;
    userId: String;
    userType: Boolean;
    customer: Boolean;
    expert: Boolean

    constructor(id: Number, userId: String, userType: Boolean, customer: Boolean, expert: Boolean) {
      this.id = id;
      this.userId = userId;
      this.userType = userType;
      this.customer = customer;
      this.expert = expert;
    }

    
}