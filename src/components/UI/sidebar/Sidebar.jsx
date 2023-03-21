import styled from 'styled-components'
import colors from '../../../constants/colors'
import SidebarItem from './SidebarItem'
import UserPanel from '../UserPanel'
import profile from '../../assets/profile.jpg'

const Sidebar = () => {
    return(
        <SidebarContainer>
            <UserPanel text = 'My name' profileUrl={profile}/>
            <Content>  
            <SidebarItem icon={'home'} text="Home" route="/login"/>
            <SidebarItem icon={'mem'} text="Create" />
            <SidebarItem icon={'user'} text="Profile" route="/user-profile"/>
            </Content> 

        </SidebarContainer>
        
    )
}

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    width:  300px;
    font-family: 'Poppins Regular';
    font-size:  12px;

`
const Content = styled.div`
     display: flex;
    justify-content: center ;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    font-size: 15px ;
    
`
export default Sidebar