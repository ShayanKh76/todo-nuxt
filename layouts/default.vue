<template>
  <v-app class="bgApp" width="100%" height="100%">
    <v-main class="main mainH">
      <v-col class="d-flex justify-space-between px-7 mt-2" width="100%">
        <span class="black--text text-h6 font-weight-medium">Projects</span>
        <span class="d-none d-md-block text-body-2"
          >This Week<v-icon color="black">mdi-chevron-down</v-icon>
        </span>
      </v-col>
      <v-flex class="d-flex flex-wrap justify-center pb-4">
        <!-- <draggable class="layers" handle=".handle"> -->
        <v-col cols="12" sm="12" md="4" lg="3" xl="3" class="pb-0 mt-3">
          <div class="bgColor rounded-lg pb-2 px-1 mx-3">
            <div class="pt-3 rounded-lg d-flex justify-space-between">
              <div class="d-flex">
                <span class="pl-3 text-h6">To do</span>
                <div class="mt-1 ml-1">
                  <span
                    class="pa-1 mr-3 mt-2 bg-color font-weight-medium text-caption rounded-lg"
                    >16</span
                  >
                </div>
              </div>
              <div class="mt-3 mr-1 mb-n2">
                <v-icon left color="#45bdf5" class="mt-n5">mdi-dots-horizontal </v-icon>
              </div>
            </div>
            <div class="d-flex justify-center bg-color mx-3 rounded-lg my-3 py-1">
              <v-icon color="#45bdf5">mdi-plus</v-icon>
            </div>
            <v-card color="transparent" width="100%" max-height="750px" class="scroll">
              <div class="scroll mt-0">
                <draggable
                  :delay="200"
                  delayOnTouchOnly="true"
                  animation="350"
                  :list="todos"
                  group="people"
                  ghostClass="ghost-cls"
                  chosenClass="chosen-cls"
                  dragClass="drag-cls"
                  class="dragArea"
                >
                  <user-card
                    v-for="todo in todos"
                    :todo="todo"
                    :key="todo.id"
                  ></user-card>
                </draggable>
              </div>
            </v-card></div
        ></v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="3" xl="3" class="pb-0 mt-3 height">
          <div class="bgColor rounded-lg pb-2 px-1 mx-3">
            <div class="pt-3 rounded-lg d-flex justify-space-between">
              <div class="d-flex">
                <span class="pl-3 text-h6">In progress</span>
                <div class="mt-1 ml-1">
                  <span
                    class="pa-1 mr-3 mt-2 bg-color font-weight-medium text-caption rounded-lg"
                    >1</span
                  >
                </div>
              </div>
              <div class="mt-3 mr-1 mb-n2">
                <v-icon left color="#45bdf5" class="mt-n5">mdi-dots-horizontal </v-icon>
              </div>
            </div>
            <div class="d-flex justify-center bg-color mx-3 rounded-lg my-3 py-1">
              <v-icon color="#45bdf5">mdi-plus</v-icon>
            </div>
            <v-card
              color="transparent"
              class="pt-0 scroll"
              width="100%"
              max-height="750px"
            >
              <draggable
                :delay="200"
                delayOnTouchOnly="true"
                animation="350"
                :list="blocking"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in blocking"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable>
            </v-card></div
        ></v-col>
        <v-col cols="12" xs="12" sm="12" md="4" lg="3" xl="3" class="mt-3 height">
          <div class="bgColor rounded-lg pb-2 px-1 mx-3">
            <div class="pt-3 rounded-lg d-flex justify-space-between">
              <div class="d-flex">
                <span class="pl-3 text-h6">Completed</span>
                <div class="mt-1 ml-1">
                  <span
                    class="pa-1 mr-3 mt-2 bg-color font-weight-medium text-caption rounded-lg"
                    >2</span
                  >
                </div>
              </div>
              <div class="mt-3 mr-1 mb-n2">
                <v-icon left color="#45bdf5" class="mt-n5">mdi-dots-horizontal </v-icon>
              </div>
            </div>
            <div class="d-flex justify-center bg-color mx-3 rounded-lg my-3 py-1">
              <v-icon color="#45bdf5">mdi-plus</v-icon>
            </div>
            <v-card
              color="transparent"
              class="pt-0 scroll"
              width="100%"
              max-height="750px"
            >
              <draggable
                :delay="200"
                delayOnTouchOnly="true"
                animation="350"
                :list="inProgress"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card-done
                  v-for="todo in inProgress"
                  :todo="todo"
                  :key="todo.id"
                ></user-card-done>
              </draggable>
            </v-card></div
        ></v-col>
        <!-- <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">IN CODE REVIEW</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="codeReview"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in codeReview"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">INSTALLED IN TEST</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="installedTest"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in installedTest"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">TESTED IN TEST</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="testedTest"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in testedTest"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>

          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">INSTALLED IN ACC</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="installedAcc"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in installedAcc"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>

          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">TESTED IN ACC (PROD READY)</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="testedAcc"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in testedAcc"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">DONE (IN PROD)</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="doneProd"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in doneProd"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">DONE (NO LINK WITH ENV)</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="doneNoENV"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in doneNoENV"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">BACKLOG (NO REFINED)</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="backlog"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in backlog"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">DOCUMENTATION</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="documentation"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in documentation"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">STUDY DEBT</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="techDebt"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in techDebt"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col>
          <v-col class="bg-color px-0 mr-3 pb-0 mt-3 height">
            <div class="pb-2 rounded d-flex justify-space-between">
              <span class="ml-4">DEPRECATED</span>

              <div class="text-sm handle" weight="4px">
                <v-icon small left color="black">mdi-drag-variant </v-icon>
              </div>
            </div>
            <v-card color="#ebecf0" class="pt-2" width="272px">
              <draggable
                :delay="200"
                :list="deprecated"
                group="people"
                ghostClass="ghost-cls"
                chosenClass="chosen-cls"
                dragClass="drag-cls"
                class="dragArea"
              >
                <user-card
                  v-for="todo in deprecated"
                  :todo="todo"
                  :key="todo.id"
                ></user-card>
              </draggable> </v-card
          ></v-col> -->
        <!-- </draggable> -->
      </v-flex>
    </v-main>
  </v-app>
</template>
<script>
import draggable from "vuedraggable";
//import BaseCard from "./ui/BaseCard.vue";
// import BaseTicket from "./BaseTicketsV2.vue";
import UserCard from "../components/UserCard";
// import UserCardDoing from "../components/UserCardDoing";
import UserCardDone from "../components/UserCardDone";
// import UserCard from "../components/UserNoneTagCard";

export default {
  components: {
    draggable,
    //    BaseCard,
    // BaseTicket,
    UserCard,
    // UserCardDoing,
    UserCardDone,
  },
  data() {
    return {
      enabled: true,
      todos: [
        {
          id: 1,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 2,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
        {
          id: 17,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 18,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
        {
          id: 19,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 20,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
        {
          id: 21,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 22,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
        {
          id: 23,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 24,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
        {
          id: 25,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 26,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
        {
          id: 27,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 28,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
        {
          id: 29,

          description: "Add express checkout to the ecommerce wevsite",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: "mdi-menu",
        },
        {
          id: 30,
          color: "#FF78CB",
          description: "Add Unit tests to the Checkout logic",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          tag: "s",
        },
      ],
      blocking: [
        {
          id: 3,

          description: "Jenkins in TEST doesn't deploy correctly anymore",
          name: "FAMILY",
          color: "#EB5A46",
          tag: " ",
          bgColor: "rgba(255, 128, 143, 0.15)",
        },
      ],
      inProgress: [
        {
          id: 4,

          description: "Active Login via Google",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: " ",
        },
        {
          id: 5,
          description: "Issue if login name contains a dot",
          name: "OTHER",
          color: "#a5d6a7",
          bgColor: "rgba(165, 214, 167, 0.15)",
          tag: "s",
        },
      ],
      codeReview: [
        {
          id: 6,

          description: "Add integration with instagram",
          name: "WORK",
          bgColor: "rgba(240, 162, 2, 0.15)",
          color: "#ff9f1a",
          tag: " ",
        },
      ],
      installedTest: [
        {
          id: 7,

          description: "Open Friewall rule",
          name: "STUDY",
          bgColor: "rgba(255, 120, 203, 0.15)",
          color: "#FF78CB",
          tag: " ",
        },
      ],
      testedTest: [],
      installedAcc: [],
      testedAcc: [],
      doneProd: [],
      doneNoENV: [],
      backlog: [
        {
          id: 8,

          description: "Add Discount code functionality",
          name: "",
          color: "#FF78CB",
          tag: false,
        },
        {
          id: 9,

          description: "Add products in sales to the catalogue",
          name: "TO DISCUSS",
          color: "#0479BF",
          tag: " ",
        },
      ],
      documentation: [
        {
          id: 10,

          description: "Current Timeline",
          name: " ",
          color: "#FF78CB",
          tag: false,
        },
        {
          id: 11,

          description: "Relevant Documentation",
          name: " ",
          color: "#0479BF",
          tag: false,
        },
        {
          id: 12,

          description: "Kickoff meeting",
          name: " ",
          color: "#0479BF",
          tag: false,
        },
        {
          id: 13,

          description: "_Checklist Templates",
          name: "",
          color: "#0479BF",
          tag: false,
        },
        {
          id: 14,

          description: "WORK",
          name: " WORK",
          color: "#ff9f1a",
          tag: " ",
        },
        {
          id: 15,
          description: "BUG",
          name: "BUG",
          color: "#EB5A46",
          tag: "s",
        },
      ],
      techDebt: [
        {
          id: 16,

          description: "Refactor the home page logic",
          name: " ",
          color: "#FF78CB",
          tag: false,
        },
      ],
      deprecated: [],

      dragging: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
* {
  user-select: none;
}
.main {
  overflow-x: auto !important;
}
.layers {
  display: flex;
}
.bg-color {
  background: #dbf4ff;
  color: #45bdf5;
}
.scroll {
  overflow: scroll !important;
  box-shadow: none !important;
}
span {
  color: #172b4d;
  font-size: 14px;
}
.bgApp {
  /* background: url("./background.jpg"); */

  background: #fefefe;

  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bgColor {
  background: #edf9ff;
}
.height {
  height: 8% !important;
}
.mainH {
  height: 0 !important;
}
.wrapper {
  display: grid;
  grid-gap: 5px;

  grid-template-rows: 30px auto;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "todo-caption wip-caption done-caption"
    "todo wip done";
}

.table-todo {
  grid-area: todo;

  border: 1px solid black;
  border-radius: 16px;
  /** /
  background: rgb(255, 150, 150);
  /**/
}

.table-wip {
  grid-area: wip;

  border: 1px solid black;
  border-radius: 16px;

  /** /
  background: rgb(140, 210, 255);
  /**/
}

/* .table-done {
  grid-area: done;

  border: 1px solid black;
  border-radius: 16px;
} */

/**/
.ghost-cls {
  opacity: 0.3;
  background: rgb(248, 187, 187);
  border-radius: 4px;
  padding: 1rem;
  margin: 0.5rem auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
}
/**/

.chosen-cls {
  opacity: 0.6;
  color: rgb(75, 73, 73);
  background: rgb(248, 221, 171);
  border-radius: 4px;
  padding: 1rem;
  margin: 0.5rem auto;
  box-shadow: 2px 2px 8px rgba(50, 50, 50, 0.35);
}

.drag-cls {
  opacity: 0.7;
  background: rgb(190, 252, 190);
  /** /
  background: rgb(252, 195, 91);
  /**/
  color: rgb(20, 20, 20);
  border-radius: 12px;
  padding: 1rem;
  margin: 0.5rem auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
}

.dragArea {
  /**/
  min-height: 20px; /**/
  /**/

  /**/
}
/*********************************/
/* width */
/* ::-webkit-scrollbar {
  width: 8px;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
} */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: gray;
} */
</style>
