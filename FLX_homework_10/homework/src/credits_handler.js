function userCard(key){
    // let key;
    let balance=100;
    let transactionLimit=1000;
    let historyLogs=[];

    return{
        getCardOptions(){
            return{
                key,
                balance,
                transactionLimit,
                historyLogs
            }
        },

        putCredits(value){

            balance=balance+value;

            historyLogs.push({
                operationType: 'Received credits',
                credits:value,
                operationTime: new Date().toLocaleString('en-GB')

            })
        },

        takeCredits(value){

            if(value>balance){

                console.log('error');

            }else{

                balance = balance - value;
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits:value,
                    operationTime: new Date().toLocaleString('en-GB')
                })
            }
        },

        setTransactionLimit(value){

            transactionLimit = value;

            historyLogs.push({
                operationType: 'Transaction limit change',
                credits:value,
                operationTime: new Date().toLocaleString('en-GB')

            })
        },

        transferCredits(value, card){

            let taxes= 0.5;
            let hundred = 100;
            let withTax = value*taxes/hundred+value

            if(withTax>balance){
                console.log('error');
            }else if(withTax>transactionLimit){
                console.log('error');
            }else{
                this.takeCredits(withTax);
                card.putCredits(value);
            }
        }
    }
}

class UserAccount{
    constructor(name){
        this.name=name;
        this.cards = [];
    }

   addCard(){
        this.cards.push(userCard(this.cards.length+1));
    }
    
    getCardByKey(cardKey){
        return this.cards[cardKey-1];
    }
} 


