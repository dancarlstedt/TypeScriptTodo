namespace ToDoApp.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Formatting;
    using System.Web.Http;

    using ToDoApp.Models;

    public class TodosController : ApiController
    {
        private static List<TodoItem> _todoItems = new List<TodoItem>();

        static TodosController()
        {
            InitializeDefaultTodos();
        }

        private static void InitializeDefaultTodos()
        {
            _todoItems.Add(
                new TodoItem()
                {
                    Id = 1,
                    Description = "Learn TypeScript"
                });

            _todoItems.Add(new TodoItem()
            {
                Id = 2,
                Description = "Rewrite Rogers Import App"
            });
        }

        // GET api/<controller>
        public IEnumerable<TodoItem> Get()
        {
            return _todoItems;
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]TodoItem[] items)
        {
            var maxId = items.Max(x => x.Id);
            _todoItems.Clear();

            // add new
            var newItems = items.Where(x => x.Id <= 0);
            var nextId = maxId + 1;
            foreach (var item in newItems)
            {
                item.Id = nextId;
                nextId++;
            }

            _todoItems.AddRange(items.OrderBy(x => x.Id));

            var response = new HttpResponseMessage(HttpStatusCode.Created)
            {
                Content = new ObjectContent(typeof(TodoItem[]), items, new JsonMediaTypeFormatter())
            };

            return response;
        }

        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            var itemToDelete = _todoItems.Single(x => x.Id == id);
            if (itemToDelete != null)
            {
                _todoItems.Remove(itemToDelete);
                return Ok();
            }

            return NotFound();
        }
    }
}