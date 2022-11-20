// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllTracks } from '../../store/tracks';
// import React from 'react';




// export default function AllTracks() {
//     // const params = useParams()
//     const dispatch = useDispatch()
//     // const {trackId} = params
//     const tracks = useSelector(state => state.tracks.allTracks)
//     const allTracks = Object.values(tracks)

//     useEffect(() => {
//         dispatch(getAllTracks())
//     }, [dispatch])

//     return (
//         <div>
//             {allTracks.map((track) => {
//                 return (
//                     <div key={track.id}>
//                         <div className='top box wrapper'>
//                             <div>
//                                 {track.track_title}
//                             </div>

//                             <div>
//                                 {track.artist}
//                             </div>

//                             <div>
//                                 {track.album}
//                             </div>
//                         </div>
//                         <div>
//                             {track.lyrics}
//                         </div>

//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
