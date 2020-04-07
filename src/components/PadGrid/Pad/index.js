import React from "react";
import styled, { keyframes } from 'styled-components'

const Pad = styled.div`
        background-color: orangered;
        animation: ${props.animate} ${padAnimate.duration} ${padAnimate.direction} ${padAnimate.iteration};`
    ;

export default Pad;