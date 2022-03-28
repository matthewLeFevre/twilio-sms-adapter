import Twilio from "twilio";
import { SID, token } from "../env.js";

export default function SMSAdapter(sid, token) {
  const client = Twilio(sid, token);
  return {
    send: async ({ to, from, message }) => {
      await client.messages.create({ body: message, to, from });
    },
  };
}

const adapter = SMSAdapter(SID, token);

(async function () {
  try {
    const res = await adapter.send({
      to: "+15417143099",
      from: "+12083141442",
      message: "This is a test message https://frm-staging.netlify.app",
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
