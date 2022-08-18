import { faEdit, faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle, faTrash, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState, useRef } from "react";

import { Text, View, StyleSheet, ScrollView, Modal, Alert, TextInput } from "react-native";
export default function App() {
  const [inpVal, setInpVal] = useState("")
  const [updInpVal, setUpdInpVal] = useState("")

  const [todoArr, setTodoArr] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [indexNo, setIndexNo] = useState("")
  function getInp(val) {
    setInpVal(val)
  }
  function add() {
    if (inpVal.length > 3) {
      setTodoArr([...todoArr, inpVal])
      setInpVal("")
    } else {
      Alert.alert("Please write correct todo")
    }

  }
  function delAll() {
    setTodoArr([])

  }
  function removeItem(ind) {

    let arr = [...todoArr]
    arr.splice(ind, 1)
    setTodoArr(arr)

  }
  function editItem(ind) {
    let arr = [...todoArr]

    arr.splice(ind, 1, updInpVal)
    setTodoArr(arr)
    handleModalClose()
  }
  function handleModalClose() {
    setModalVisible(false)
  }
  function handleModalOpen(index, item) {
    setModalVisible(true)
    setUpdInpVal(item)
    setIndexNo(index)



  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContentView}>
            <TextInput value={updInpVal} onChangeText={(val) => setUpdInpVal(val)} style={styles.modalInput} placeholder="Enter the updated value" placeholderTextColor="white" />
            <Text onPress={() => editItem(indexNo)} style={styles.modalUpdIcon}>
              <FontAwesomeIcon icon={faPlusCircle} style={styles.modalIcon} />
            </Text>
          </View>
        </View>

      </Modal>
      <View style={styles.mainView}>
        <View style={styles.section}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Todo List</Text>
          </View>

          <View style={styles.view1}>

            <TextInput placeholder="Enter the task to do" onChangeText={getInp} value={inpVal} style={styles.input} placeholderTextColor="white" />


            <Text onPress={add} style={styles.buttons}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </Text>


            <Text onPress={delAll} style={styles.buttons}>
              <FontAwesomeIcon icon={faTrash} />
            </Text>



          </View>
          <ScrollView>
            <View style={styles.allTasksView}>
              <View style={styles.ul}>
                {todoArr.map((item, index) => {
                  return (
                    <View style={styles.taskView}>

                      <Text key={item} style={styles.item}>{item}</Text>

                      <View style={styles.iconsView}>
                        <Text onPress={() => handleModalOpen(index, item)} >
                          <FontAwesomeIcon icon={faEdit} style={styles.editIcon} />
                        </Text>
                        <Text onPress={() => removeItem(index)} >
                          <FontAwesomeIcon icon={faMinusSquare} style={styles.delIcon} />
                        </Text>

                      </View>

                    </View>
                  )
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkkhaki',
   

  },

 
  
 
 
   taskView: {
     display: "flex",
     flexDirection: "row",
     width: 160,
     justifyContent: "space-between"
   },
   iconsView: {
     display: "flex",
     flexDirection: "row",
     width: 40,
     justifyContent: "space-between"
   },
   ul: {
     display: "flex",
     alignItems: "center"
   }  ,
  mainView: {
    marginTop: 20,
    height: 600,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
  },
  view1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#2F4F4F",
    width: 350,
    paddingBottom: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

  },
  section: {
    backgroundColor: " #2F4F4F",
    display: "flex",

    width: 350,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    height: 500,
    borderRadius: 5,


  },
  allTasksView: {
    display: "flex",

    alignItems: "center",
    backgroundColor: "#2F4F4F",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  buttons: {
    marginLeft: 20,
    backgroundColor: "darkkhaki",
    width: 30
    ,
    paddingLeft: 8,
    paddingTop: 12

  },
  editIcon: {
    paddingLeft: 10,
    color: "yellow",
  },
  delIcon: {
    color: "aqua",
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 350,
    backgroundColor: "#2F4F4F",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

  },
  headingText: {
    color: "white",
    fontSize: 25,
    marginBottom: 15,
    marginTop: 10
  },
  input: {
    color: "white",
    backgroundColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grey",
    padding: 7,
    borderRadius: 5,
    width: 200
  },
  item: {

    fontSize: 20,
    color: "white"
  },
  taskView: {
    backgroundColor: "#2F4F4F",
    marginTop: 4,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    padding: 8,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

  },
  ul: {
    padding: 0,
    width: "75 %",
    marginRight: 20,
  },
  iconsView: {
    display: "flex",
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    width: 50,
    justifyContent: "space-between"
  },
  modalView: {
    backgroundColor: "white",
    display: "flex",

    alignItems: "center",

    paddingTop: 10,
    paddingBottom: 10
  },
  modalContentView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 230
  },
  modalInput: {
    color: "white",
    backgroundColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grey",
    padding: 7,
    borderRadius: 5,
    width: 200
  }

}); 