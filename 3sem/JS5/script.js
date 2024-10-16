let cost;
const sub = 'premium';
switch (sub) {
    case 'free':
    cost = 0;
        break;
    case 'pro': cost = 50;
        break;
    case 'normal':
    cost = 200;
        break;
    default:
        console.log('Жодної правильної відповіді');
}
console.log(cost);