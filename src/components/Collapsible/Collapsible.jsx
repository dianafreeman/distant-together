import React, { useState, useLayoutEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

const Collapsible = ({ isOpen, children }) => {
    const [height, setHeight] = useState(0)
    const heightRef = useRef(null)

    const { h } = useSpring({
        h: isOpen ? height : 0,
    })
    useLayoutEffect(() => {
        function adjustHeight() {
            let { clientHeight } = heightRef.current
            setHeight(clientHeight)
        }
        setTimeout(() => adjustHeight(), 100)
    }, [heightRef])
    return (
        <animated.div
            style={{
                height: h.interpolate(
                    (h) => `calc(${h}px + ${isOpen ? '3em' : '10px'})`
                ),
                overflow: 'hidden',
            }}
        >
            <div ref={heightRef}>{children}</div>
        </animated.div>
    )
}

export default Collapsible
