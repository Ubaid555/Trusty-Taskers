/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
//import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import FacebookIcon from '@mui/icons-material/Facebook';
//import InstagramIcon from '@mui/icons-material/Instagram';
//import MessageIcon from '@mui/icons-material/Message';
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <>
    <section className={styles.container}>
      <div className={styles.contact_form}>
        
        <div className={styles.top_btn}>
          <Button text="Via Support Chat" icon={<MdMessage fontSize="24px" />}/>
          <Button  text="Via Email Form" icon={<HiMail fontSize="24px" />} />
        </div>
        
       {/*} <div className={styles.s_btns}>
          <Button isOutline={true} icon={<WhatsAppIcon fontSize="24px" />}/>
          <Button isOutline={true} icon={<FacebookIcon fontSize="24px" />}/>
          <Button isOutline={true} icon={<InstagramIcon fontSize="24px" />}/>
          <Button isOutline={true} icon={<MessageIcon fontSize="24px" />}/>
  </div>*/}
        <Button text="Via Phone" icon={<FaPhoneAlt fontSize="24px" />} />

      {/*<div className={styles.s_icons}>
        <a href="https://www.whatsapp.com" icon={<WhatsAppIcon fontSize="24px" />} />
</div>*/}
        <form className="form" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit Now" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/Images/Service.png" alt="contact image" />
      </div>
    </section>
    
    </>
  );
};

export default ContactForm;

