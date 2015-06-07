﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoApp.Models
{
    public class TodoItem
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public bool IsDone { get; set; }
    }
}