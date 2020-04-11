import React from 'react'
import { IconWrap } from './styled'

const ExpandCollapse = ({ onClick, label, isOpen }) => {
    const { rotation } = useSpring({
        rotation: isOpen ? 0 : 180,
    })

    return (
        <div onClick={onClick}>
            {label}
            <IconWrap
                style={{
                    transform: rotation.interpolate((r) => `rotate(${r}deg)`),
                }}
            >
                <i className={`fas fa-chevron-up`}></i>
            </IconWrap>
        </div>
    )
}
export default ExpandCollapse
/*
<Toggle
    isOpen={store.formIsOpen}
    label={`Show more filters`}
    onClick={() => store.toggleFormOpen()}
/>
*/
