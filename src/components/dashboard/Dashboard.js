import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import {  firestoreConnect } from 'react-redux-firebase'
import  { compose } from 'redux'
//import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        //console.log(this.props)
        const { projects, notifications } = this.props;
        //if (!auth.uid) return <Redirect to='/sigin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList  projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                         <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
       // auth: state.firestore.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStoreToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);