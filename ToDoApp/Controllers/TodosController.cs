using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using ToDoApp.Models;

namespace ToDoApp.Controllers
{
    public class TodosController : ApiController
    {
        private static Dictionary<int, TodoItem> _todoItems = new Dictionary<int, TodoItem>();

        static TodosController()
        {
            InitializeDefaultTodos();
        }

        private static void InitializeDefaultTodos()
        {
            _todoItems.Add(
                1, new TodoItem()
                {
                    Id = 1,
                    Description = "Learn TypeScript"
                });

            _todoItems.Add(2, new TodoItem()
            {
                Id = 2,
                Description = "Rewrite Rogers Import App"
            });
        }

        // GET api/<controller>
        public IEnumerable<TodoItem> Get()
        {
            return _todoItems.Values;
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            if (_todoItems.ContainsKey(id))
            {
                return Ok(_todoItems[id]);
            }
            return NotFound();
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]TodoItem item)
        {
            // assuming model state is valid
            int maxTodoId = _todoItems.Max(x => x.Key);
            var todoId = maxTodoId + 1;
            item.Id = todoId;

            _todoItems.Add(todoId, item);

            var response = new HttpResponseMessage(HttpStatusCode.Created)
            {
                Content = new ObjectContent(typeof(TodoItem), item, new JsonMediaTypeFormatter())
            };

            return response;
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put(int id, [FromBody]TodoItem item)
        {
            if (_todoItems.ContainsKey(item.Id))
            {
                _todoItems[id] = item;
                return Ok(item);
            }
            return NotFound();

        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}