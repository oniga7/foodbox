import {AddBox, Check, Clear, DeleteOutline, Edit} from '@mui/icons-material'

export const tableIcons = {
    Add: () => <AddBox style={{ color: 'red' }} />,
    Check: () => <Check />,
    Clear: () => <Clear />,
    Delete: () => <DeleteOutline />,
    Edit: () => <Edit />,
}

export const tableOptions =  {
    filtering: false,
    sorting: false,
    draggable: false,
    paging: false,
    actionsColumnIndex: -1,
    search: false,
    tableLayout: 'auto',
    headerStyle: {
        fontSize:'12px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '5px',
        color: 'rgba(0, 0, 0, 0.6)',
        padding: '6px 16px'
    }
}