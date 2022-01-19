class Phone {
    constructor(draft, inbox, sent) {
        this.battery = 100;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
        this.status = false;
    }
    changeStatus(){
        if(this.status){
            this.status = false;
        }
        else{
            this.status = true;
        }
    }
    checkStatus(){
        if(this.status){
            return "On";
        }
        else{
            return "Off";
        }
    }
    checkBattery() {
        if (this.status) {
            if (this.battery > 0) {
                return this.battery;
            }
            else {
                return "Out of battery"
            }
        }
    }

    textMessage(text) {
        if (this.status) {
            this.draft = text;
        }
    }

    sendMessage(receiver) {
        if(this.status) {
                receiver.inbox.push(this.draft);
                this.sent.push(this.draft);
                this.draft = "";
                this.battery--;
                receiver.battery--;
            }
        }
    showInbox() {
        if (this.status) {
            return this.inbox;
        }
    }
    charge(){
        for (let i = this.battery;i===100;i++){
            this.battery = i;
        }
        return this.battery;
    }
}

let thiet = new Phone("", [], []);
let trang = new Phone("", [], []);