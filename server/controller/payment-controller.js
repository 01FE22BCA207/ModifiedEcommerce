import paytmchecksum from '../paytm/paytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../index.js';
import * as formidable from 'formidable';
import https from 'https';

export const addPaymentGateway = async (request, response) => {
    try {
        const paytmCheckSum = await generatePaytmChecksum(paytmParams, paytmMerchantkey);
        if (!paytmCheckSum) {
            throw new Error('Failed to generate Paytm checksum');
        }
        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.json(params);
    } catch (error) {
        console.error('Error adding payment gateway:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
};

export const paymentResponse = (request, response) => {
    const form = new formidable.IncomingForm();
    const paytmCheckSum = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;

    const isVerifySignature = verifyPaytmSignature(request.body, 'bKMfNxPPf_QdZppa', paytmCheckSum);
    if (isVerifySignature) {
        const paytmParams = {
            "MID": request.body.MID,
            "ORDERID": request.body.ORDERID
        };
        generatePaytmChecksum(paytmParams, 'bKMfNxPPf_QdZppa')
            .then(checksum => {
                if (!checksum) {
                    throw new Error('Failed to generate Paytm checksum');
                }
                paytmParams["CHECKSUMHASH"] = checksum;
                const post_data = JSON.stringify(paytmParams);
                const options = {
                    hostname: 'securegw-stage.paytm.in',
                    port: 443,
                    path: '/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };
                let res = "";
                const post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        res += chunk;
                    });
                    post_res.on('end', function () {
                        let result = JSON.parse(res);
                        console.log(result);
                        response.redirect(`http://localhost:3000/`);
                    });
                });
                post_req.write(post_data);
                post_req.end();
            })
            .catch(error => {
                console.error('Error generating Paytm checksum:', error);
                response.status(500).json({ error: 'Internal Server Error' });
            });
    } else {
        console.log("Checksum Mismatched");
    }
};

async function generatePaytmChecksum(params, key) {
    try {
        const checksum = await paytmchecksum.generateSignature(params, key);
        return checksum;
    } catch (error) {
        console.error('Error generating Paytm checksum:', error);
        return null;
    }
}

// function verifyPaytmSignature(params, key, checksum) {
//     try {
//         return paytmchecksum.verifySignature(params, key, checksum);
//     } catch (error) {
//         console.error('Error verifying Paytm signature:', error);
//         return false;
//     }
// }
function verifyPaytmSignature(params, key, checksum) {
    try {
        return paytmchecksum.verifySignature(params, key, checksum);
    } catch (error) {
        console.error('Error verifying Paytm signature:', error);
        return false;
    }
}
