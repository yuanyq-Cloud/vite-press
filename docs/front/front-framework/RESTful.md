# RESTful

## REST的Web原则

### 1. 无状态原则

- 基于状态的Web服务

    在基于状态的Web服务中，Client与Server交互的信息(如：用户登录状态)会保存在Server的Session中。再这样的前提下，Client中的用户请求只能被保存有此用户相关状态信息的服务器所接受和理解，这也就意味着在基于状态的Web系统中的Server无法对用户请求进行负载均衡等自由的调度(一个Client请求只能由一个指定的Server处理)。同时这也会导致另外一个容错性的问题，如果指定的Server在Client的用户发出请求的过程中宕机，那么此用户最近的所有交互操作将无法被转移至别的Server上，即此请求将无效化。

- 基于无状态的Web服务

    在无状态的Web服务中，每一个Web请求都必须是独立的，请求之间是完全分离的。Server没有保存Client的状态信息，所以Client发送的请求必须包含有能够让服务器理解请求的全部信息，包括自己的状态信息。使得一个Client的Web请求能够被任何可用的Server应答，从而将Web系统扩展到大量的Client中。

- 两者的区别

    因为无状态原则的特性，让RESTful在分布式系统中得到了广泛的应用，它改善了分布式系统的可见性、可靠性以及可伸缩性，同时有效的降低了Client与Server之间的交互延迟。

- 资源

    在Server端中的应用程序状态和功能都可以抽象为一种资源，如：应用程序对象、数据库记录、算法等，这些资源以URI(Universal Resource Identifier)的方式向Client公开。每一个资源映射到一个URI，URI作为资源的唯一标识。

- HTTP标准方法

    因为所有的资源又都共享统一的接口，便于Client和Server之间使用标准的HTTP方法(GET、PUT、POST、DELETE)来传输信息。


### 2. 分层系统原则

- 分层系统

    为了使得系统中的组件无法了解除了与它自身交互的中间件之外的任何组件。通过将不同的组件分别限制在各自的层面上，可以限制整个系统的复杂性，促进了底层的独立性。并且使用统一的Dashboard可以简化整个系统的后端架构，改进子系统之间交互的可见性。即：简化了Client和Server的实现。

- 中间件

    中间件是一种独立的系统软件或服务程序，能够连接两个独立软件或系统。分布式应用软件借助于中间件能够在不同的技术之间共享资源。即：中间件使得若干个相互独立的系统，在各自都拥有着不同的接口的情况下，仍然能通过中间件来实现通信。执行中间件的一个关键途径是信息的传递。通过中间件，应用程序可以工作在多个平台及OS环境中。简而言之，中间件即桥梁。

