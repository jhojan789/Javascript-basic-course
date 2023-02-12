let obj = {
    free: 'This is free account',
    monthly: 'This is monthly',
    yearly: 'This is yearly'
}

//console.log(obj['monthly']);

function account(account){
    if(obj[account]){
        console.log(obj[account]);
        return;
    }
    console.warn('There is no account');
    
}

account('yearly');
