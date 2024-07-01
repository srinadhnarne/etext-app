import React from 'react'
import Layout from '../layouts/Layout'
import { useCurrentPage } from '../context/useCurrentPage';
import ContactInfo from '../components/ContactInfo';
import MediaLinks from '../containers/rightpanel/MediaLinks';
import StarredMessages from '../containers/rightpanel/StarredMessages';

const ChatScreen = () => {
    const {RightPanel} = useCurrentPage();
  return (
    <Layout>
        {
            RightPanel===1?<ContactInfo/>:
            RightPanel===2?<MediaLinks/>:
            RightPanel===3&&<StarredMessages/>
        }
    </Layout>
  )
}

export default ChatScreen