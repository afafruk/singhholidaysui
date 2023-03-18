import React, { useEffect, useState } from 'react'
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    p: {
      margin: 12,
      fontSize: 12,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
      width:300,
      height:200
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

const Pkgpdf = (props) => {
    const [first, setfirst] = useState('')
    useEffect(() => {
        pdata()
        
    }, [])

    const pdata = ()=>{        
        const pd = props.pkgdata
        setfirst(pd)
    
    }    
    
  return (
    
    <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        {first && first.Name}
      </Text>

      <view>
      {first?
   
    <Image
    src={ first.Image + `?noCache=` + Math.random().toString() }
    source={{
        header: {
            'Access-Control-Allow-Origin': '*'
        }
    }}
    />
    
    :""
}
      </view>
        {first && first.data.map((e,i)=>{
            return(
                <>
        <Image style={styles.image} src={e.dayDescriptionandDetails.freeSalePackageDayImages[0].imageSrc  + `?noCache=` + Math.random().toString()} 
         source={{
            header: {
            'Access-Control-Allow-Origin': '*'
            }
        }}/>
        
        <Text style={styles.p} key={i}>
            {e.dayDescriptionandDetails.description}
        </Text>
                </>
            )
        })}
      {/* </Text> */}
      <Text>
        {
            props.pkgrate
        }
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) =>
          `${pageNumber} / ${totalPages}`
        }
      />
    </Page>
  </Document>
  )
}

export default Pkgpdf