import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


export default function DisplayLyrics({ track, setAnnotating, setIndex }) {


    // console.log('annotating', annotating)

    return (
        <>
            {/* Something */}
            {/* {sortedSort} */}
            {/* {track?.lyrics} */}
            {track.lyrics?.split('\n').map(chunk => <div key={chunk}>{chunk}</div>)}
            {/* {track.lyrics} */}
            {/* {track.lyrics?.split("\n")} */}
            {/* {React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk))} */}
            {/* {console.log(React.Children.toArray(track.lyrics?.split('\n').map(chunk => chunk)))} */}

            {/* {React.Children.toArray(Object.values(annotations))} */}
            {/* {Object.values(annotations)?.map(anno => anno.annotation_body)} */}
            {/* {track.lyrics?.split('\n').slice(1, 6)} */}
        </>
    )
}
