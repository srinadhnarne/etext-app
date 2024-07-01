export const chats = [
    {
        username:"Ram",
        lastmessage:"Hello",
        userid:"1",
        lastmessagetime: "2024-05-16T13:05:24.185+00:00",
        unreadCount:6
    },
    {
        username:"Shyam",
        lastmessage:"Hey there!",
        userid:"2",
        lastmessagetime: "2024-05-16T13:05:24.185+00:00",
        unreadCount:5
    },
    {
        username:"Verma",
        lastmessage:"How are you doing?",
        userid:"3",
        lastmessagetime: "2024-05-16T13:05:26.185+00:00",
        unreadCount:3
    },
    {
        username:"Sharma",
        lastmessage:"Hope everything is fine",
        userid:"4",
        lastmessagetime: "2024-05-16T13:05:28.185+00:00",
        unreadCount:0
    },
    {
        username:"Verma",
        lastmessage:"How are you doing?",
        userid:"5",
        lastmessagetime: "2024-05-16T13:06:24.185+00:00",
        unreadCount:3
    },
    {
        username:"Sharma",
        lastmessage:"Hope everything is fine",
        userid:"6",
        lastmessagetime: "2024-05-16T13:08:24.185+00:00",
        unreadCount:0
    }
]

export const pinnedChats = [
    {
        username:"Ram",
        lastmessage:"Hello",
        userid:"8",
        lastmessagetime: "2024-06-20T13:09:24.185+00:00",
        unreadCount:0
    },
    {
        username:"Shyam",
        lastmessage:"Hey there!",
        userid:"9",
        lastmessagetime: "2023-05-16T13:09:24.185+00:00",
        unreadCount:8
    }
]

export let personalChat = [
    {
        id:'1',
        from:{
            id:'2',
            name:'Shyam'
        },
        to:{
            id:'1',
            name:'Ram'
        },
        dateTime: '2023-05-16T13:05:24.185+00:00',
        message:'Hey Dude!',
        uid:'12',
        reactions: [],
        starred:{
            from:false,
            to:true
        },
        dataType:'text'
    },
    {
        id:'2',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2023-05-16T13:05:24.185+00:00',
        message:'Hey there!',
        uid:'12',
        reactions: [],
        starred:{
            from:false,
            to:true
        },
        dataType:'text'
    },
    {
        id:'3',
        from:{
            id:'2',
            name:'Shyam'
        },
        to:{
            id:'1',
            name:'Ram'
        },
        dateTime: '2024-06-16T13:05:26.185+00:00',
        message:'How is it going?',
        uid:'12',
        reactions: [],
        starred:{
            from:false,
            to:false
        },
        dataType:'text'
    },
    {
        id:'4',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2024-05-16T13:06:26.185+00:00',
        message:'Everything is going good buddy',
        uid:'12',
        reactions: [],
        starred:{
            from:true,
            to:true
        },
        dataType:'text'
    },
    {
        id:'5',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2024-05-16T13:06:27.185+00:00',
        message:'Wbu?',
        uid:'12',
        reactions: [],
        starred:{
            from:true,
            to:false
        },
        dataType:'text'
    },
    {
        id:'6',
        from:{
            id:'2',
            name:'Shyam'
        },
        to:{
            id:'1',
            name:'Ram'
        },
        dateTime: '2024-06-16T13:05:24.185+00:00',
        message:'Hey Dude!',
        reactions: [],
        uid:'12',
        starred:{
            from:false,
            to:true
        },
        dataType:'text'
    },
    {
        id:'7',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2023-05-16T13:05:25.185+00:00',
        message:'Hey there!',
        uid:'12',
        reactions: [],
        starred:{
            from:false,
            to:true
        },
        dataType:'text'
    },
    {
        id:'8',
        from:{
            id:'2',
            name:'Shyam'
        },
        to:{
            id:'1',
            name:'Ram'
        },
        dateTime: '2024-05-17T13:05:26.185+00:00',
        message:'How is it going?',
        uid:'12',
        reactions: [],
        starred:{
            from:false,
            to:false
        },
        dataType:'text'
    },
    {
        id:'9',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2024-05-16T13:05:26.185+00:00',
        message:'Everything is going good buddy',
        uid:'12',
        reactions: [],
        starred:{
            from:true,
            to:false
        },
        dataType:'text'
    },
    {
        id:'10',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2023-05-16T13:05:26.185+00:00',
        message:'Wbu?',
        uid:'12',
        reactions: [],
        starred:{
            from:false,
            to:false
        },
        dataType:'text'
    },
    {
        id:'11',
        from:{
            id:'2',
            name:'Shyam'
        },
        to:{
            id:'1',
            name:'Ram'
        },
        dateTime: '2023-05-16T13:05:24.185+00:00',
        message:'Hey Dude!',
        uid:'12',
        reactions: [],
        starred:{
            from:false,
            to:false
        },
        dataType:'text'
    },
    {
        id:'12',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2023-05-16T14:05:25.185+00:00',
        message:'Hey there!',
        reactions:['👍'],
        uid:'12',
        starred:{
            from:false,
            to:false
        },
        dataType:'text'
    },
    {
        id:'13',
        from:{
            id:'2',
            name:'Shyam'
        },
        to:{
            id:'1',
            name:'Ram'
        },
        dateTime: '2023-05-16T14:05:26.185+00:00',
        message:'How is it going?😉',
        reactions: [],
        uid:'12',
        starred:{
            from:false,
            to:true
        },
        dataType:'text'
    },
    {
        id:'14',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2023-05-16T14:05:26.185+00:00',
        message:'test',
        document: 'abcd.com',
        reactions: [],
        uid:'12',
        starred:{
            from:false,
            to:false
        },
        dataType:'pdf'
    },
    {
        id:'15',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2023-05-16T15:05:26.185+00:00',
        document:"https://th.bing.com/th/id/OIP.r6T15uZAtJojeA8gFi8AEgHaEH?rs=1&pid=ImgDetMain",
        uid:'12',
        reactions: [],
        starred:{
            from:true,
            to:false
        },
        dataType:'img'
    },
    {
        id:'16',
        from:{
            id:'1',
            name:'Ram'
        },
        to:{
            id:'2',
            name:'Shyam'
        },
        dateTime: '2023-05-17T15:05:26.185+00:00',
        message:"50",
        uid:'12',
        reactions: [],
        starred:{
            from:true,
            to:false
        },
        dataType:'payment',
        success:false
    },
    {
        id:'17',
        from:{
            id:'2',
            name:'Shyam'
        },
        to:{
            id:'1',
            name:'Ram'
        },
        dateTime: '2023-05-17T15:05:26.185+00:00',
        message:"100",
        uid:'12',
        starred:{
            from:true,
            to:false
        },
        dataType:'payment',
        success:true
    },
]