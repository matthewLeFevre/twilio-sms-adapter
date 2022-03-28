import Twilio from "twilio";

export default function SMSAdapter(sid: string, token: string, sender: number) {
  const client = Twilio(sid, token);
  return {
    sender: "+1" + sender,
    send: async (reciever: number, message: string) => {
      await client.messages.create({
        body: message,
        to: "+1" + reciever,
        from: "+1" + sender,
      });
    },
  };
}
