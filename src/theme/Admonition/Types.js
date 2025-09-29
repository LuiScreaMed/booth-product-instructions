import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import clsx from 'clsx';
import styles from './styles.module.css';

function Changelog(props) {
    const infimaClassName = "alert alert--primary";

    return (
        <div className={clsx(infimaClassName, styles.admonitionChangelog)}>
            <div>{props.children}</div>
        </div>
    );
}

const AdmonitionTypes = {
    ...DefaultAdmonitionTypes,

    // Add all your custom admonition types here...
    // You can also override the default ones if you want
    'changelog': Changelog,
};

export default AdmonitionTypes;