import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import screens from '../../lib/theme/screens'
import useMeasure from 'react-use-measure'

const Collapsible = ({ isOpen, children }) => {
    const [height, setHeight] = useState(0)
    const heightRef = useRef(null)

    const isSmallScreen = document.body.clientWidth < 455
    const { h } = useSpring({
        h: isOpen ? height : 0,
    })
    // const ref = useRef()
    // const [ref, rect] = useMeasure()

    useEffect(() => {
        let { clientHeight } = heightRef.current
        setHeight(clientHeight + 30)
    })
    return (
        <animated.div
            style={{
                height: h.interpolate((h) => `${h}px`),
                overflow: 'hidden',
            }}
        >
            <div ref={heightRef}>{children}</div>
        </animated.div>
    )
}

export default Collapsible
