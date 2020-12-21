import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react'

// import logoUrl from '../public/yardstick.svg';
const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light justify-content-between sticky-top">
        <a class="navbar-brand" href="/">Yard Stick</a>
        <div class="d-none d-md-block ">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/plan/plan-input">Plan <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/measure/measure-input">Measure <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/analyze/analyze-input">Analyze <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
            </li>
        </ul>
        </div>
        <AmplifySignOut/>
    </nav>
    
)
export default Header;