(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_86b3b7._.js", {

"[project]/components/conversa.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Conversa
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NCVCYSZZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scroll_shadow_default__as__ScrollShadow$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/scroll-shadow/dist/chunk-NCVCYSZZ.mjs [app-client] (ecmascript) <export scroll_shadow_default as ScrollShadow>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
function Conversa({ mensagens, usuarios }) {
    _s();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const user = localStorage.getItem('usuario');
        setCurrentUser(user);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NCVCYSZZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scroll_shadow_default__as__ScrollShadow$3e$__["ScrollShadow"], {
        hideScrollBar: true,
        className: "text-black h-4/5",
        children: mensagens.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex ${msg.usuario === currentUser ? 'justify-end' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-lg shadow-md max-w-[70%] mt-4 p-4 
                        ${msg.usuario === currentUser ? 'bg-violet-500 text-white mr-4' : 'bg-gray-100 ml-4'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm font-semibold 
                                ${msg.usuario === currentUser ? 'text-violet-100' : 'text-violet-600'}`,
                                children: msg.usuario
                            }, void 0, false, {
                                fileName: "[project]/components/conversa.tsx",
                                lineNumber: 22,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base break-words",
                                children: msg.mensagem
                            }, void 0, false, {
                                fileName: "[project]/components/conversa.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs mt-2 
                                ${msg.usuario === currentUser ? 'text-violet-200' : 'text-gray-500'}`,
                                children: new Date(msg.data).toLocaleDateString('pt-BR')
                            }, void 0, false, {
                                fileName: "[project]/components/conversa.tsx",
                                lineNumber: 29,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/conversa.tsx",
                        lineNumber: 21,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/conversa.tsx",
                    lineNumber: 17,
                    columnNumber: 21
                }, this)
            }, index, false, {
                fileName: "[project]/components/conversa.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/conversa.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(Conversa, "Y5F2pQQk2LZA5WRO2+bvRm5iRuo=");
_c = Conversa;
var _c;
__turbopack_refresh__.register(_c, "Conversa");

})()),
"[project]/app/(layout)/home/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$conversa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/conversa.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function Home() {
    _s();
    const [clicou, setClicou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        mensagens: [],
        usuarios: []
    });
    const [salas, setSalas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [salaAtualId, setSalaAtualId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem('token');
        if (token) {
            fetch('https://chat-api-pi-hazel.vercel.app/salas', {
                headers: {
                    'Authorization': token
                }
            }).then((response)=>response.json()).then((data)=>{
                console.log(data);
                setSalas(data);
            }).catch((error)=>console.error('Error fetching chat rooms:', error));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (salaAtualId) {
            const token = localStorage.getItem('token');
            const fetchMessages = ()=>{
                if (token) {
                    fetch(`https://chat-api-pi-hazel.vercel.app/mensagens/${salaAtualId}`, {
                        headers: {
                            'Authorization': token
                        }
                    }).then((response)=>response.json()).then((data)=>{
                        console.log(data);
                        setMessages(data);
                    }).catch((error)=>console.error('Error fetching messages:', error));
                }
            };
            fetchMessages();
            const intervalId = setInterval(fetchMessages, 10000);
            return ()=>clearInterval(intervalId);
        }
    }, [
        salaAtualId
    ]);
    const handleSalaClick = (salaId)=>{
        setClicou(true);
        setSalaAtualId(salaId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:flex h-screen max-h-[88vh] gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-2 border-purple-700 rounded-lg md:w-96 mr-4 mb-4 bg-gray-800 shadow-lg transform transition-all hover:border-purple-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "p-4 font-bold text-2xl text-purple-400 border-b border-purple-700",
                        children: "Salas"
                    }, void 0, false, {
                        fileName: "[project]/app/(layout)/home/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto max-h-[calc(100vh-8rem)]",
                        children: salas.map((sala)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 flex rounded-lg hover:cursor-pointer transition-colors duration-200 
                ${salaAtualId === sala._id ? 'bg-purple-900/50' : 'hover:bg-gray-700'}`,
                                onClick: ()=>handleSalaClick(sala._id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-purple-300 mb-1",
                                            children: sala.nome
                                        }, void 0, false, {
                                            fileName: "[project]/app/(layout)/home/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm truncate",
                                            children: sala.mensagens.length > 0 ? sala.mensagens[sala.mensagens.length - 1].mensagem : 'Sem mensagens'
                                        }, void 0, false, {
                                            fileName: "[project]/app/(layout)/home/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(layout)/home/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, sala._id, false, {
                                fileName: "[project]/app/(layout)/home/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/(layout)/home/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(layout)/home/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "border-2 border-violet-700 rounded-lg md:w-3/4 bg-gray-800 shadow-lg flex flex-col",
                children: [
                    clicou && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex justify-between border-b border-violet-700 bg-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-violet-300",
                                        children: "Usuários"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(layout)/home/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: messages.usuarios.length > 0 ? messages.usuarios.map((usuario, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-300 text-sm",
                                                children: usuario
                                            }, index, false, {
                                                fileName: "[project]/app/(layout)/home/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "Nenhum usuário online"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(layout)/home/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(layout)/home/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(layout)/home/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-lg hover:bg-red-500/20 transition-colors duration-200",
                                onClick: ()=>setClicou(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "x.svg",
                                    className: "w-6 h-6 opacity-70 hover:opacity-100",
                                    alt: "Fechar"
                                }, void 0, false, {
                                    fileName: "[project]/app/(layout)/home/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(layout)/home/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(layout)/home/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    clicou ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$conversa$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        mensagens: messages.mensagens,
                        usuarios: messages.usuarios
                    }, void 0, false, {
                        fileName: "[project]/app/(layout)/home/page.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-lg",
                            children: "Selecione uma sala para iniciar a conversa"
                        }, void 0, false, {
                            fileName: "[project]/app/(layout)/home/page.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(layout)/home/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(layout)/home/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(layout)/home/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(Home, "x0UxAvOTfBAQp+NRTDIs0KBMEmM=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");

})()),
"[project]/app/(layout)/home/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
"[project]/node_modules/@nextui-org/theme/dist/chunk-EF6G67MF.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "scrollShadow": ()=>scrollShadow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$N2KXC5ZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-N2KXC5ZE.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
// src/components/scroll-shadow.ts
var verticalShadow = [
    "data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
];
var horizontalShadow = [
    "data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
];
var scrollShadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$N2KXC5ZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: [],
    variants: {
        orientation: {
            vertical: [
                "overflow-y-auto",
                ...verticalShadow
            ],
            horizontal: [
                "overflow-x-auto",
                ...horizontalShadow
            ]
        },
        hideScrollBar: {
            true: "scrollbar-hide",
            false: ""
        }
    },
    defaultVariants: {
        orientation: "vertical",
        hideScrollBar: false
    }
});
;

})()),
"[project]/node_modules/@nextui-org/use-data-scroll-overflow/dist/index.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// src/index.ts
__turbopack_esm__({
    "useDataScrollOverflow": ()=>useDataScrollOverflow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-SOU6N57Y.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useDataScrollOverflow(props = {}) {
    const { domRef, isEnabled = true, overflowCheck = "vertical", visibility = "auto", offset = 0, onVisibilityChange, updateDeps = [] } = props;
    const visibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(visibility);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = domRef == null ? void 0 : domRef.current;
        if (!el || !isEnabled) return;
        const setAttributes = (direction, hasBefore, hasAfter, prefix, suffix)=>{
            if (visibility === "auto") {
                const both = `${prefix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(suffix)}Scroll`;
                if (hasBefore && hasAfter) {
                    el.dataset[both] = "true";
                    el.removeAttribute(`data-${prefix}-scroll`);
                    el.removeAttribute(`data-${suffix}-scroll`);
                } else {
                    el.dataset[`${prefix}Scroll`] = hasBefore.toString();
                    el.dataset[`${suffix}Scroll`] = hasAfter.toString();
                    el.removeAttribute(`data-${prefix}-${suffix}-scroll`);
                }
            } else {
                const next = hasBefore && hasAfter ? "both" : hasBefore ? prefix : hasAfter ? suffix : "none";
                if (next !== visibleRef.current) {
                    onVisibilityChange == null ? void 0 : onVisibilityChange(next);
                    visibleRef.current = next;
                }
            }
        };
        const checkOverflow = ()=>{
            const directions = [
                {
                    type: "vertical",
                    prefix: "top",
                    suffix: "bottom"
                },
                {
                    type: "horizontal",
                    prefix: "left",
                    suffix: "right"
                }
            ];
            for (const { type, prefix, suffix } of directions){
                if (overflowCheck === type || overflowCheck === "both") {
                    const hasBefore = type === "vertical" ? el.scrollTop > offset : el.scrollLeft > offset;
                    const hasAfter = type === "vertical" ? el.scrollTop + el.clientHeight + offset < el.scrollHeight : el.scrollLeft + el.clientWidth + offset < el.scrollWidth;
                    setAttributes(type, hasBefore, hasAfter, prefix, suffix);
                }
            }
        };
        const clearOverflow = ()=>{
            [
                "top",
                "bottom",
                "top-bottom",
                "left",
                "right",
                "left-right"
            ].forEach((attr)=>{
                el.removeAttribute(`data-${attr}-scroll`);
            });
        };
        checkOverflow();
        el.addEventListener("scroll", checkOverflow);
        if (visibility !== "auto") {
            clearOverflow();
            if (visibility === "both") {
                el.dataset.topBottomScroll = String(overflowCheck === "vertical");
                el.dataset.leftRightScroll = String(overflowCheck === "horizontal");
            } else {
                el.dataset.topBottomScroll = "false";
                el.dataset.leftRightScroll = "false";
                [
                    "top",
                    "bottom",
                    "left",
                    "right"
                ].forEach((attr)=>{
                    el.dataset[`${attr}Scroll`] = String(visibility === attr);
                });
            }
        }
        return ()=>{
            el.removeEventListener("scroll", checkOverflow);
            clearOverflow();
        };
    }, [
        ...updateDeps,
        isEnabled,
        visibility,
        overflowCheck,
        onVisibilityChange,
        domRef
    ]);
}
;

})()),
"[project]/node_modules/@nextui-org/scroll-shadow/dist/chunk-NGBOO6ON.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useScrollShadow": ()=>useScrollShadow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$EF6G67MF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-EF6G67MF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$data$2d$scroll$2d$overflow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/use-data-scroll-overflow/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-SOU6N57Y.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
function useScrollShadow(originalProps) {
    var _a;
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$EF6G67MF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollShadow"].variantKeys);
    const { ref, as, children, className, style, size = 40, offset = 0, visibility = "auto", isEnabled = true, onVisibilityChange, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$data$2d$scroll$2d$overflow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDataScrollOverflow"])({
        domRef,
        offset,
        visibility,
        isEnabled,
        onVisibilityChange,
        updateDeps: [
            children
        ],
        overflowCheck: (_a = originalProps.orientation) != null ? _a : "vertical"
    });
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$EF6G67MF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollShadow"])({
            ...variantProps,
            className
        }), [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        className
    ]);
    const getBaseProps = (props2 = {})=>{
        var _a2;
        return {
            ref: domRef,
            className: styles,
            "data-orientation": (_a2 = originalProps.orientation) != null ? _a2 : "vertical",
            style: {
                "--scroll-shadow-size": `${size}px`,
                ...style,
                ...props2.style
            },
            ...otherProps,
            ...props2
        };
    };
    return {
        Component,
        styles,
        domRef,
        children,
        getBaseProps
    };
}
;

})()),
"[project]/node_modules/@nextui-org/scroll-shadow/dist/chunk-NCVCYSZZ.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "scroll_shadow_default": ()=>scroll_shadow_default
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NGBOO6ON$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/scroll-shadow/dist/chunk-NGBOO6ON.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
var ScrollShadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, children, getBaseProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NGBOO6ON$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollShadow"])({
        ...props,
        ref
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...getBaseProps(),
        children
    });
});
ScrollShadow.displayName = "NextUI.ScrollShadow";
var scroll_shadow_default = ScrollShadow;
;

})()),
"[project]/node_modules/@nextui-org/scroll-shadow/dist/chunk-NCVCYSZZ.mjs [app-client] (ecmascript) <export scroll_shadow_default as ScrollShadow>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "ScrollShadow": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NCVCYSZZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll_shadow_default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$scroll$2d$shadow$2f$dist$2f$chunk$2d$NCVCYSZZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/scroll-shadow/dist/chunk-NCVCYSZZ.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
}]);

//# sourceMappingURL=_86b3b7._.js.map