import React from 'react'
import "../Auth.css";



export default function ContainerAuth({ name, children }) {
    return (
        <>
            <div className='container-info'>
                <div className='container-info2'>
                    <div className='whereStudy'>
                        <svg width="69" height="46" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M67.4126 16.2142L54.947 21.5559V41.5804C54.947 42.2205 54.5386 42.7878 53.9312 42.9882C48.0341 44.9544 41.837 45.9375 35.6413 45.9375C29.4442 45.9375 23.2485 44.9544 17.3514 42.9882C16.744 42.7878 16.3356 42.2205 16.3356 41.5804V26.5175C16.3356 25.6963 16.9994 25.0324 17.8207 25.0324C18.6419 25.0324 19.3057 25.6963 19.3057 26.5175V40.4978C29.8808 43.7931 41.4003 43.7931 51.9769 40.4978V22.8301L36.2264 29.5797C36.0393 29.6599 35.8403 29.7 35.6413 29.7C35.4423 29.7 35.2433 29.6599 35.0562 29.5797L5.94022 17.1008V25.5181C7.66437 26.1329 8.91033 27.7664 8.91033 29.7C8.91033 32.1562 6.91145 34.1551 4.45517 34.1551C1.99889 34.1551 0 32.1562 0 29.7C0 27.7664 1.24596 26.1329 2.97011 25.5181V14.8494C2.97011 14.2554 3.32355 13.7178 3.87005 13.4847L35.0562 0.119176C35.4304 -0.0397252 35.8522 -0.0397252 36.2264 0.119176L48.8583 5.53368C49.6112 5.85743 49.9617 6.73064 49.6379 7.48356C49.3157 8.23945 48.4425 8.59141 47.6881 8.26321L35.6413 3.09968L8.22572 14.8494L35.6413 26.5992L63.0569 14.8494L52.8768 10.4863C52.1239 10.1626 51.7734 9.28938 52.0972 8.53646C52.418 7.78205 53.2927 7.42861 54.0471 7.75681L67.4126 13.4847C67.9591 13.7178 68.3125 14.2554 68.3125 14.8494C68.3125 15.4434 67.9591 15.981 67.4126 16.2142ZM4.45517 31.185C5.27491 31.185 5.94022 30.5197 5.94022 29.7C5.94022 28.8802 5.27491 28.2149 4.45517 28.2149C3.63541 28.2149 2.97011 28.8802 2.97011 29.7C2.97011 30.5197 3.63541 31.185 4.45517 31.185Z" fill="white" />
                        </svg>
                        <div className='whereStudy-2'>
                            <h2 className='title-h2'>DÓNDE ESTUDIO</h2>
                            <svg className='svg-line' width="203" height="3" viewBox="0 0 203 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="203" height="3" rx="1.5" fill="white" />
                            </svg>
                        </div>
                    </div>

                    <div className='title-h3'>
                        <h3>{name} en Dóndeestudio.com</h3>
                    </div>
                    <div className='text'>
                        <h6 className='title-h6'>
                            En este sitio encontrarás todas las universidades y sus respectivas calificaciones en base a lo que los usuarios opinen.
                        </h6>
                    </div>
                </div>
            </div>
            <div className='container-form '>
            {children}
            </div>
        </>

    )
}
