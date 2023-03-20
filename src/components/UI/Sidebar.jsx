import styled from 'styled-components'
import colors from '../../constants/colors'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    return(
        <SidebarContainer>
            <SidebarItem icon={'home'} text="Home" />
            <SidebarItem icon={'mem'} text="Create" />
            <SidebarItem icon={'user'} text="Profile" />
        </SidebarContainer>
        
    )
}

const SidebarContainer = styled.div`
    display: flex;
    justify-content: center ;
    flex-direction: column;
    height: 200px;
    width:  500px;

`
export default Sidebar