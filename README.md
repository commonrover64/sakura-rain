# Sakura Rain

LightWeight sakura falling / rain animation as a Web Component.

## Install
npm install sakura-rain

## Usage
import "sakura-rain";

<sakura-rain></sakura-rain> <!-- Default is 🌸 -->  
<sakura-rain emoji="add your custom emoji here"></sakura-rain>


## Example (React / Mern)
import "sakura-rain";

function App() {

    return (
        <>
            <sakura-rain sakura="❄️"/>
            <h1>Hello World</h1>
        </>
    )
}