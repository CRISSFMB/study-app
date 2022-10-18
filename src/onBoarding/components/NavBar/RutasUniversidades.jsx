
import { Routes, Route, Link } from 'react-router-dom'

import NavBar from './NavBar'

import AccesoTransportePublico from './AccesoTransportePublico'
import Ambiente from './Ambiente'
import DemandaHoraria from './DemandaHoraria'
import NivelAcademico from './NivelAcademico'
import NivelProfesor from './NivelProfesor'
import { HomeScreen } from '../../../home/pages/HomeScreen'

const RutasUniversidades = () => {

    return (
        <>

            
            
            <Routes>
            
                <Route path="NivelAcademico" element={<NivelAcademico />} />
                <Route path="AccesoTransporte" element={<AccesoTransportePublico />} />
                <Route path="NivelProfesor" element={<NivelProfesor />} />
                <Route path="Ambiente" element={<Ambiente />} />
                <Route path="DemandaHoraria" element={<DemandaHoraria />} />
            </Routes>

        </>
    )
}

export default RutasUniversidades