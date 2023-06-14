import roles from "../constants/roles";

const getRoleSections = (role) => {
    const sections = []
    switch (role?.trim()) {
        case roles.admin:
            sections.push('admin')
            break;
        case roles.beekeeper:
            sections.push('beekeeper')
            break;
        case roles.client:
            sections.push('client o guest')
            break;
        case roles.guest:
            sections.push('client o guest')
            break;
        default:
            break;
    }

    return sections
}

export default getRoleSections