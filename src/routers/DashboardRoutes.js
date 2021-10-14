import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { Navbar } from '../components/iu/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <div>
          <Navbar/>
            <div className='container ml-2'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen}/>
                    <Route exact path='/heroe/:heroeId' component={HeroScreen}/>
                    <Route exact path='/dc' component={DcScreen}/>
                    <Route exact path='/search' component={SearchScreen}/>

                    <Redirect to='/marvel'/>
                </Switch>   
            </div> 
        </div>
    )
}
