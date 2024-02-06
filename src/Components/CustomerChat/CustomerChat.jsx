import { CustomChat, FacebookProvider } from "react-facebook";

const CustomerChat = () => {
    return (
        <FacebookProvider appId="718692396907673" chatSupport>
          <CustomChat pageId="203862282818372" minimized={true}/>
        </FacebookProvider>    
      );
};

export default CustomerChat;