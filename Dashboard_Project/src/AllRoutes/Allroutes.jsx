import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Ecommerce from '../pages/Ecommerce'
import Orders from '../pages/Orders'
import Employees from '../pages/Employees'
import Customers from '../pages/Customers'
import Kanban from '../pages/Kanban'
import Editor from '../pages/Editor'
import Calendar from '../pages/Calendar'
import Line from '../pages/Chart/Line'
import Bar from '../pages/Chart/Bar'
import Area from '../pages/Chart/Area'


const Allroutes = () => {
  return (
    <div>
    <Routes>
        {/* dashboard */}
        <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                {/* <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                {/* <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}

    </Routes>
    </div>
  )
}

export default Allroutes
